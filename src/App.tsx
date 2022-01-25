import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabBar, TabName } from './components/TabBar';
import { BlogTab } from './components/BlogTab';
import { Layout } from './components/Layout';

function App() {
  const [activeTab, setActiveTab] = useState<TabName>('None');

  console.log(activeTab)

  let mainContent = <></>;
  switch(activeTab) {
    case 'Blog': 
      mainContent = <BlogTab/>;
      break;
    default:
      mainContent = (<><div>
        Active tab is: {` ${activeTab}`}
      </div>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#4ecdc4' }}>
      </div>
      <p>
        This is my personal site. Take a load off!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis aliquam enim, vitae luctus ligula pulvinar non. Nunc congue nunc eu ligula imperdiet dignissim. Etiam nec risus lacinia, finibus nibh vel, rutrum mi. Phasellus congue leo et elementum vehicula. Maecenas fringilla ligula nec metus facilisis sollicitudin. Proin sit amet pharetra dui, vel porta mi. Mauris magna ligula, vestibulum nec ornare sed, scelerisque eu lectus. Curabitur nec pulvinar felis, ac tempor nulla. Sed sed viverra leo. Vivamus tristique tortor ac rhoncus efficitur. Proin maximus libero semper eros interdum, nec dictum magna imperdiet. Sed eu porta sapien, at egestas purus. Maecenas interdum interdum mi, eget molestie justo.
      </p>
      <p>
        Vestibulum fermentum ligula eget augue bibendum, tincidunt tristique urna pulvinar. Fusce vel massa metus. Proin vehicula fringilla lobortis. Morbi non augue purus. Sed vulputate, turpis nec pretium hendrerit, arcu mi faucibus mauris, nec pharetra ex urna ac odio. Phasellus rutrum, ex nec laoreet consequat, neque ipsum fringilla turpis, sed finibus nulla metus id diam. Donec imperdiet quam erat, et convallis eros dignissim quis. Nulla eu leo vitae mauris faucibus fermentum. Sed porttitor pretium ligula, sed scelerisque leo pulvinar eu. In ornare rhoncus consequat. Curabitur mollis consectetur diam at pellentesque. Cras dapibus porta iaculis. In vehicula nisl sed mauris rutrum vulputate. Aliquam a sem neque. Praesent viverra sodales ornare. Etiam hendrerit ligula quis ligula eleifend imperdiet.
      </p>
      <p>
        Sed malesuada quam eget ex volutpat, eu commodo velit fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu tellus egestas arcu posuere mattis. Suspendisse potenti. Sed sed risus est. Donec id consequat augue. Sed et elit vel sapien commodo dapibus quis quis libero. Curabitur commodo magna felis, in porta quam placerat quis. Vivamus eleifend quam eget ultricies cursus. Vivamus id libero et sapien laoreet placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vitae ex nec nisl blandit dapibus. Aliquam fermentum dignissim enim, vitae gravida ipsum commodo non. Etiam quis tortor id est ultrices suscipit. Phasellus quis mattis felis, sed placerat neque. Mauris dapibus non elit sit amet mollis.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse ex ipsum, sagittis eget commodo ut, luctus in turpis. Nullam est magna, condimentum in consectetur a, mattis nec lectus. Cras interdum est augue, vitae hendrerit lacus convallis blandit. Etiam ac cursus leo. Praesent in leo vitae risus gravida laoreet. Cras erat tortor, ultrices id hendrerit sed, iaculis sit amet orci. Sed cursus arcu sapien, quis congue augue consectetur id. Mauris blandit id justo sit amet consequat. Praesent malesuada vel orci eu venenatis. Vestibulum eleifend porttitor orci, quis congue nisi condimentum eget. Nunc volutpat dignissim augue, et bibendum lacus pharetra ullamcorper. Proin egestas purus nec dignissim blandit.
      </p>
      <p>
        Nam gravida magna et erat vestibulum interdum a vel ipsum. In fermentum in purus aliquet volutpat. Sed rhoncus, erat vel rhoncus tempus, lacus massa tincidunt eros, nec egestas magna augue eget diam. Maecenas at dictum turpis, ullamcorper faucibus elit. Cras ac ligula ultricies, sodales urna ac, consectetur metus. Proin luctus turpis quis libero cursus, vulputate convallis diam fringilla. Donec accumsan vehicula condimentum. Nunc mollis, dolor non auctor blandit, tellus nibh elementum nisl, eget pellentesque nisi lorem vel ante. Phasellus est mi, vehicula id aliquet non, tempus vel erat. Vestibulum semper ultrices velit vitae tincidunt. Nulla dolor metus, rutrum id magna non, sagittis tempor felis. In tristique tellus id nibh semper, non varius justo malesuada. Phasellus luctus velit et lorem finibus posuere. Duis ullamcorper nulla sed turpis consectetur viverra. Ut ut feugiat est, in rhoncus urna. Quisque viverra, nisi eu auctor pharetra, urna sem rhoncus nunc, non interdum quam leo eu libero.
      </p></>)
  }

  return (
    <>
      <TabBar activeTab={activeTab} onTabChange={(tab: TabName) => {setActiveTab(tab)}}/>
      <Layout>
        {mainContent}
      </Layout>
    </>
  );
}

export default App;
