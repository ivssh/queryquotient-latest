import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
}) => {
  const internalLink = href.startsWith('/') || href.startsWith('#');
  
  const props = {
    className,
    ...((!internalLink && target !== '_self') && {
      target: target || '_blank',
      rel: rel || 'noopener noreferrer',
    }),
  };

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};