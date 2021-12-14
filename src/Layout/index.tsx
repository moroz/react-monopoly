import React from "react";
import Header from "./Header";
import styles from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
