   const DoneList = ({ done }) => (
    <>
      {done.map((todo,index) => (
        <div className="response">
          <div className="done-elt" key={todo+index}>
            {todo}
          </div>
        </div>
      ))}
    </>
  );
  export default DoneList;