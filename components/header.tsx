import React from "react";
interface Props {
  title: string;
  description?: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <header className="header">
      <article>
        <h1 className="text-dark-100">{title}</h1>
        <p>{description}</p>
      </article>
    </header>
  );
};

export default Header;
