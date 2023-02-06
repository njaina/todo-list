   const DoneList = ({ done }) => (
    <div>
      {done.map((todo) => (
        <div className="response">
          <div className="done-elt" key={todo}>
            {todo}
          </div>
        </div>
      ))}
    </div>
  );
  export default DoneList;