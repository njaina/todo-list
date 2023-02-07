import React from "react";
import renderer from "react-test-renderer";
import DoneList from "../Components/DoneList";

describe("DoneList component", () => {
  it("renders correctly", () => {
    const done = ["todo1", "todo 2", "todo 3"];
    const tree = renderer.create(<DoneList done={done} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
