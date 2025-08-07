const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const ChildrenExample = () => {
  return (
    <Card>
      <p>This Paragraph is passed as children to the Card component.</p>
    </Card>
  );
};
export default ChildrenExample;
