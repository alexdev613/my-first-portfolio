import React from 'react';
import { ResponsiveContainer, ResponsiveIframe } from './styles';


interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <ResponsiveContainer>
      <ResponsiveIframe
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
    </ResponsiveContainer>
  );
};

export default YouTubeVideo;
