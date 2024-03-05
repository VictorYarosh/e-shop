import React, { FC } from 'react';

interface FooterListProps {
  children: React.ReactNode;
}
const FooterList: FC<FooterListProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
      {children}
      <p></p>
    </div>
  );
};
export default FooterList;
