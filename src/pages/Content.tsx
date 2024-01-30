import { useState } from 'react';
import { Grid, Layout, PageHeader } from '../components';

const Content = () => {
  const tabs = [
    {
      name: 'articles',
      buttons: [
        {
          label: 'New Article',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          ),
          onClick: () => {},
        },
      ],
    },
  ];

  const [currentTab, setCurrentTab] = useState('articles');

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  const [blogPosts] = useState([
    { title: 'Blog Post 1', imageUrl: 'path/to/image1.jpg' },
    { title: 'Blog Post 2', imageUrl: 'path/to/image2.jpg' },
  ]);

  // const handleNewBlogPost = () => {};

  const renderContent = () => {
    switch (currentTab) {
      case 'articles':
        return <Grid items={blogPosts} />;
      case 'news-letter':
        return <div>News Letter</div>;
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <Layout>
      <PageHeader
        title='Content'
        tabs={tabs}
        onTabChange={handleTabChange}
      />
      {renderContent()}
    </Layout>
  );
};

export default Content;
