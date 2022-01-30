import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { Layout } from '../../Layout';

const post = `
# Building a Livestreamed Murder Mystery Game with Amazon IVS and Timed Metadata

Requirements
- [Postman](https://www.postman.com/)
- [Broadcasting Software](https://obsproject.com/)
- [Amazon Web Services (AWS) Account with Billing](https://aws.amazon.com)

## Introduction

In this tutorial, we are going to create a livestreamed murder mystery game using Amazon's Interactive Video Service (IVS) and its Timed Metadata API.

For this project, the livestreamed content will be a collection of fictional character monologues framed as police interviews, filmed after a heinous murder was discovered to have taken place. As each character tells their side of the story, clues and hints will begin filling out the viewer's notepad. At the end of the stream, viewers will be able to flip through their copy of the notepad and try to solve the mystery!

[You can find the complete sample code for this project here.](https://github.com/bern/murder-mystery)

![Screenshot of the completed project](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost1.png)

## Creating a Channel in Amazon IVS

We'll begin by setting up our livestream in Amazon IVS. The first step is to log in to the AWS Console and navigate to the Amazon IVS service. Once we're there, let's create a new Channel with a name like _murder-mystery_ that retains all of its default settings.

![Screenshot of IVS channel setup in the AWS console](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost2.png)

Once that's created, take note of your Channel's ARN, Ingest Server, Stream Key, and Playback URL.

![Screenshot with different components of the IVS channel view highlighted](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost3.png)

At this point, go ahead and enter your Stream Key and Ingest Server address into your preferred broadcasting software and try to stream to your channel. The video feed should be viewable directly from the “Live stream” section of your Channel's detail view on the IVS Console.

## Gaining AWS Authentication Credentials with IAM

For this project, we will also need a way to make API requests to AWS. In order to do this, we need a set of credentials that are authorized to make requests against specific AWS endpoints - in this case, IVS's _PutMetadata_ endpoint. Luckily, AWS has a way to create this set of credentials via its Identity and Access Management (IAM) service.

First, navigate to IAM via the AWS console and create a new Policy. You'll need to attach a permission for the Interactive Video Service that allows you to use the PutMetadata action against all resources. In the future, we may want to make this policy more restrictive such that we only allow actions to be taken against specific resources.

![Screenshot of the IAM visual editor for creating a new permission for IVS](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost4.png)

Save the Policy under a name you'll remember, like _murder-mystery-policy_. Next, you'll create an IAM User to which we'll apply this Policy. When you create your IAM User, you only need to grant it the Programmatic Access Type as we'll only be needing it for AWS API authorization.

![Screenshot of the IAM editor adding a new user](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost5.png)

Then attach the policy you just created.

![Screenshot of the IAM editor attaching the new policy to the IAM user](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost6.png)

And on the confirmation screen, you will have a chance to record the Access Key ID and Secret Access Key for your new IAM User. Do so, as we will need this information later.

![Screenshot of the IAM user confirmation page with different components highlighted](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost7.png)

## Building our Murder Mystery Web App

Now that our AWS setup is done, take a moment to clone the [Amazon IVS Basic Web Sample](https://github.com/aws-samples/amazon-ivs-basic-web-sample) Github repository. We will be using the [custom-player-controls](https://github.com/aws-samples/amazon-ivs-basic-web-sample/tree/master/custom-player-controls) demo as a boilerplate for our new murder mystery web app. Change the playbackUrl in _custom-player-controls/script.js_ to be the Playback URL for your new IVS Channel. Now begin streaming to your channel and open _custom-player-controls/index.html_ in your browser: you should see your livestream displayed on the custom video player!

Now that we have our livestream embedded in our page, we want to add a representation of the viewer's notepad underneath it. This notepad will fill out with hints and clues as the stream progresses, thanks to IVS's Timed Metadata API. For our notepad, we are going to be using this great [Codepen](https://codepen.io/qorbani/pen/fIuzB) as a solution (credits to Dan Eden, uploaded by Reza Qorbani). Copy all the CSS that affects the notepad class and add it to _custom-player-controls/style.css_. Now let's add the notepad in a new div underneath our player.

\`\`\`html
<div class="player-wrapper">
    ...
</div>
<div class="notepad">
    <h1>Notes</h1>
    <textarea id="notepad" disabled></textarea>
</div>
\`\`\`

Now let's add a container div around both the _player-wrapper_ and the _notepad_.

\`\`\`html
<div class="container">
    <div class="player-wrapper">
        ...
    </div>
    <div class="notepad">
        <h1>Notes</h1>
        <textarea id="notepad" disabled></textarea>
    </div>
</div>
\`\`\`

Set that _container_ with a flexbox style.

\`\`\`css
.container {
    height: 100%;
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
\`\`\`

And ensure that the _player-wrapper_ never grows beyond a fixed 16x9 aspect ratio.

\`\`\`css
.player-wrapper {
    display: flex;
    flex-grow: 1;
    width: 100%;
    max-width: 640px;
    max-height: 360px;
    /* ... */
}
\`\`\`

## Sending Clues with Timed Metadata and Postman

Now it's time to set the contents of our notepad automatically using IVS Timed Metadata.

### What is Timed Metadata?

[Timed Metadata](https://docs.aws.amazon.com/ivs/latest/userguide/SEM.html) is metadata that is bound to a certain timestamp on your live video feed. When you call the _PutMetadata_ endpoint, you supply a string of information that will be delivered at the nearest upcoming timestamp in the stream. Rather than all viewers receiving this information at the moment you send it, viewers will instead receive this information when they consume that specific timestamp in your livestream. This way, you can ensure that certain bits of metadata will not be received until your viewers have passed a certain point in your video feed.

We can test our ability to insert Timed Metadata into our livestream using Postman. Create a new Postman request and configure the following:

First, determine the AWS Region your channel is in by looking at your IVS Channel ARN, which should be in the format of _arn:aws:ivs:{ AWS_REGION }:etc_. Set the Postman request URL to whichever [Amazon IVS service endpoint](https://docs.aws.amazon.com/ivs/latest/APIReference/Welcome.html) corresponds to the region your channel is in, and target the /PutMetadata route. The request type will be POST.

![Screenshot of Postman with the IVS endpoint url entered](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost8.png)

Select the Authorization tab and change your Authorization Type to AWS Signature. Paste the Access Key ID and Secret Access Key of your IAM User into their corresponding fields. Under Advanced, for Service Name, put ivs.

![Screenshot of the Authorization tab in Postman](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost9.png)

Now set your request body as raw JSON in accordance with the [PutMetadata API documentation](https://docs.aws.amazon.com/ivs/latest/APIReference/API_PutMetadata.html). This is our chance to send a clue for our murder mystery as the _metadata_ sent in this request.

![Screenshot of the expected response once the request is fired in Postman](https://blog-post-assets.s3.amazonaws.com/IVSBlogPost10.png)

We need a way to represent all of our murder mystery clues within _custom-player-controls/script.js_. Let's define them as an empty, global array at the top of the file for now.

\`\`\`js
const clues = [];
\`\`\`

Our boilerplate already provides an anonymous callback function for handling incoming Timed Metadata. By modifying the callback function defined in the EventListener for the PlayerEventType.TEXT_METADATA_CUE, we can take the metadata text and push it to our list of clues. Then, we can render our list of clues to our _notepad_.

\`\`\`js
player.addEventListener(PlayerEventType.TEXT_METADATA_CUE, function (cue) {
    const clue = cue.text;
    clues.push(clue);
    document.getElementById("notepad").value = clues.join("\\n");
});
\`\`\`

Now, when we fire our PutMetadata API request via Postman while our livestream is running, our web app will pull the clue from the supplied metadata and insert it directly onto our notepad!

## Next Steps

With this, the basic functionality of our interactive murder mystery app is complete. There are a lot of ways to extend this project. You can:

- Create a companion application that allows a broadcaster to create clues in advance and send them directly to the AWS PutMetadata endpoint.
- Create a more robust notepad that parses metadata clues as JSON and separates clues into categories such as suspects, motives, etc.
- Create a submission system where a viewer can try to solve the mystery once the stream ends. Who will be the first to put the pieces together?

I hope you found this tutorial helpful! If you have any feedback or questions, feel free to message me on Twitter [@berniemarger](https://twitter.com/berniemarger), or via [my personal site](https://berniemarger.com/contact). I would love to hear what you're building!

See you next time 👋
`;

export const IVSPostMetadata = {
    name: 'Building a Livestreamed Murder Mystery Game with Amazon IVS and Timed Metadata',
    key: 'building-a-livestreamed-murder-mystery-game-with-amazon-ivs-and-timed-metadata',
    date: new Date(2020, 9, 9) // October 9, 2020
}

export function IVSPost() {
  return (
    <Layout>
      <div>
        <Link to="/blog">Back to Blog</Link>
      </div>
      <div>
        <ReactMarkdown>
          {post}
        </ReactMarkdown>
      </div>
      <div>
        <Link to="/blog">Back to Blog</Link>
      </div>
    </Layout>
  );
}
