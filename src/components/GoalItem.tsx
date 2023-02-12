function GoalItems(props: any) {
  const deleteHandler = () => {
    props.deleteHandler(props.id);
  };

  return (
    <div className="goal-items-container">
      <button className="btn-items" type="button" onClick={deleteHandler}>
        {props.goal}
      </button>
    </div>
  );
}

export default GoalItems;
