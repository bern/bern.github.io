import { BlogPost } from '../BlogPost';

const post = `
# Mastering Technical Interviews: A Human Approach

I had a professor at my alma mater who used to stress the _human_ side of software engineering. “Clean code isn't written for the computer's sake,” he would say. “It's written so that the person who maintains your code once you leave the company doesn't want to tear their (and your) hair out.”

![An image saying "thousands of lines and zero comments am I being punished for something"](https://miro.medium.com/max/1400/1*-ARRaJ7x1dka1unE-xI_PQ.jpeg)
*Direct quote from your coworker reading your awful, terrible code. (Credit: theprofoundprogrammer.com)*

This is a practical guide to mastering the _human_ side of the software engineering technical interview, because robots don't make for fun coworkers [(yet)](https://www.youtube.com/watch?v=rVlhMGQgDkY).

When it comes to technical interviews, a core set of skills is often overlooked. I don't mean the recursive implementation of quicksort or bottom-up dynamic programming; I mean _soft skills_. The skills they teach you in leadership seminars and professional development courses. The skills that are often associated with suits and sweaty handshakes and questions like, “Where do you see yourself in five years?”

Developing a set of soft skills can boost your professional presence tremendously in an interview, making you seem more confident and — more likely than not — more competent.

> _“She couldn't implement a red-black tree if her life depended on it, but **wow** did she have a firm handshake.” — **Your Future Employer**_

I created this set of techniques for myself at the beginning of my third year of undergrad. Since then, I have received intern and full-time SWE offers from companies like Google, Facebook, Microsoft, Lyft, and Twitch.

Hopefully, by reading and applying the material of this guide, you can replicate that success for yourself and lead a long and illustrious software engineering career.

Let's get started.

## Preparation Before the Interview

I'm not going to go over the technical knowledge-base you need to dominate SWE interviews, at least not in-depth. For that, I would highly recommend picking up a copy of Gayle Laakmann-McDowell's book [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/). Seriously, CtCI is a **treasure trove** for anyone preparing for a software engineering technical interview.

![A picture of Gayle Laakmann-McDowell posing with her book Cracking the Coding Interview](https://miro.medium.com/max/1018/1*o3mhuIUDkFH5ewrTHAli5w.jpeg)
*Name a more iconic duo. I'll wait.*

Within the book, Laakmann-McDowell includes a list of data structures, algorithms, and programming techniques (e.g. recursion, bit manipulation) to master for your interviews. I took that list to heart and made sure that I could:

1. Implement every data structure and algorithm in the list with no reference material.
2. Derive the time complexity (_read: Big-O Notation_) of every operation in the list.
3. Solve most practice problems based around each programming technique listed.

Mastering that set of material is a **very good idea®** and will give you a technical toolset suitable for most challenges in the interview circuit.

## The Technical Phone Screen

So you nabbed the phone interview. Nice work! For a lot of internships, it ends here: a strong performance in your phone interviews means you will receive an offer. For full-time positions, a strong performance typically leads to a round of interviews at the company's office (_read: onsite interviews_).

You're prepared on the technical side of things: you have a programming language of choice, you have a pencil and paper ready for scratch work, and you've studied your fundamentals tirelessly. Here are some tips for the human side of the interview.

![A person in a suit who is on the phone, writing notes, and look at their computer all at once](https://miro.medium.com/max/850/1*4F0q31_Fq-EcS000uMIZcQ.jpeg)
*Prepared, poised, and sweating profusely.*

1. **Remember your interviewer's name and use it in conversation.** Seriously, write it down in your notes as soon as you learn it. The goal here is to **establish a personal connection with your partner** that goes beyond candidate and interviewer. Don't forget to give them a, “Thanks for your time, Rebecca!” at the end of the call.
2. **Treat them as you would a coworker. Be genuine.** At the end of the call, your interviewer is going to ask themselves, “Would I want to work with this person every day for the next few years?” If you can appear **confident, fun, and engaging** then you will send all sorts of strong signals.
3. Write down everything. Write down what team your interviewer works on, how long they've been at the company, and even jokes the interviewer made during the phone call. **These notes should be as important as your technical cheat-sheet,** and they should be referenced often to make interesting and relevant conversation.
4. **Get your partner talking and ask questions.** Especially at the end of the call, have a few questions prepared to ask your interviewer. Treat it less as a “question and response” and more as **setting the topic of a conversation.** Ideally, your questions should be interesting enough to your interviewers that they should want to engage with you over them.

## Tips for the Technical Question

> _“All dreams are outside of our comfort zone. Leaving our comfort zone is the price we must pay to achieve them.” — Steve Jobs_

The idea of this section may make you uncomfortable, but I'm going to ask you to trust me here and take the real plunge.

**Never stop talking during the technical question. _Seriously._**

Your interviewer only has two viewpoints into your problem-solving process during the technical portion of the interview: your _code_ and your _words_. Staying silent as you implement a solution can deny an interviewer from seeing how magnificent of a problem solver you are. What I say normally sticks to the following script:

1. **Verbally repeat the problem and make sure you understand it.** Prompt dialogue with your interviewer to _make sure_ you understand it.
2. **Go over the expected input and output of your program and decide on appropriate data types.** Another conversation to have with your interviewer. Discuss the tradeoffs and pros/cons of your options.
3. **Explain your initial thoughts on solving the problem,** e.g. “This looks like a pathfinding problem, but I'm not quite sure how to store the path for backtracking.”
4. **If you have a good solution, start writing it immediately. Otherwise say, “I'm going to implement a naïve solution for now and try to optimize it later.”** Even if the _initial_ solution isn't your _final_ solution, it's better to write imperfect code than leave your interviewer with radio silence while you scribble possibilities on your scratch paper.
5. **Explain every chunk of logic to your interviewer BEFORE you write it.** If your interviewer sees you heading down an obviously wrong path, they can play conductor and reroute your train of thought.
6. **Write your thoughts as comments.** Often I will find myself swimming in a sea of subproblems that all exist in my head. Saying, “Here are the subproblems I think I need to solve,” and writing those into your editor as comments will serve you doubly-well: organizing your thoughts and giving your interviewer a much-needed insight into how you are breaking down the question.
7. **If you find yourself staying silent for more than five seconds while working on a problem, actively break yourself out of it.** Tell your interviewer, “I'm stuck thinking of ways to tackle this subproblem.” This will show your interviewer that you are still invested in the problem and actively working to solve it rather than laying dead in the water.

## The Onsite Interview

You nailed the technical question and your interviewer loved you. Nice work! Chances are you will be asked to come onsite to the company's office and have a round of in-person interviews. Many of the same principles apply here as before, but with a few additions.

1. **Get your interviewers' names beforehand and write them down.** Onsite interview coordinators typically have a list of employees with whom you'll be speaking throughout the day. Ask your coordinator for that list BEFORE you set foot in the office. _*Protip: look up your interviewers and their roles within the company on LinkedIn. Especially if you are speaking with a hiring manager, knowing what they look like beforehand can help you mentally prepare to be on your best behavior._
2. **Practice formal interview etiquette. Stand up when your interviewer walks in, shake their hand to greet them, and give them an award-winning smile.** Repeat the same process at the end of the interview. I always strive for a casual vibe during the interview: I relax in my chair, I use colloquialisms and tell jokes, but **I never leave professionalism behind.**
3. **Follow up with everyone involved in your process.** Send an email to your recruiter thanking them for the opportunity. If you're feeling bold, ask your recruiter to send a thank-you note on your behalf to all interviewers involved. This is a small gesture that goes a long way.

The pattern here is simple: **show your interviewers that you would be a great addition to the company, both technically and personally.** This is how interview signals get amplified and a _good_ conversation turns into a _memorable_ conversation.

At the end of the day, a company can fill your gaps in technical knowledge, but it is way tougher for an employer to reconcile a lack of personality in a candidate.

Prove to them that you are an **absolute delight** to work with, and it will pay off in spades.

Good luck!
`;

export const TechnicalInterviewPostMetadata = {
    name: 'Mastering Technical Interviews: A Human Approach',
    key: 'mastering-technical-interviews-a-human-approach',
    date: new Date(2017, 2, 4) // March 3, 2017
}

export function TechnicalInterviewPost() {
  return <BlogPost postMarkdown={post}/>;
}
