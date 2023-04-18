type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="p-10">{children}</div>;
}

export { Layout };
