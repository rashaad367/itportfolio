import React from "react";

interface SocialButtonProps {
  icon: string;
  url: string;
  altText: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, url, altText }) => {
  return (
    <div className="flex">
      <a href={url} target="_blank" rel="noopener noreferrer" className="p-2">
        <img src={icon} alt={altText} className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialButton;
