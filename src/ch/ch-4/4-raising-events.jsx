const Item = ({ name, onDelete }) => {
  return (
    <div className="flex">
      <span>{name}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
const items = ["item1", "item2", "item3"];

const RaisingEvents = () => {
  const handleDelete = (itemName) => {
    alert(`Deleting ${itemName}`);
  };

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} name={item} onDelete={() => handleDelete(item)} />
      ))}
    </div>
  );
};

export default RaisingEvents;
