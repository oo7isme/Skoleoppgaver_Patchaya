/**
 * @jest-environment jsdom
 */
describe("checkInput", () => {
  let form;
  let checkDate;
  let checkInput;

  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(window, "alert").mockImplementation(() => {});

    form = {
      current: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
    };
    checkDate = jest.fn();

    checkInput = () => {
      if (
        form.current[0].value === "" ||
        form.current[1].value === "" ||
        form.current[2].value === "" ||
        form.current[3].value === ""
      ) {
        alert("Fill in your informations");
      } else {
        checkDate();
      }
    };
  });

  it("alerts if any of the form inputs are empty", () => {
    form.current[0].value = "John";
    form.current[1].value = "Doe";
    form.current[2].value = "edd";
    form.current[3].value = "";
    checkInput();
    expect(window.alert).toHaveBeenCalledWith("Fill in your informations");
  });

  it("calls checkDate if all form inputs are filled", () => {
    form.current[0].value = "John";
    form.current[1].value = "Doe";
    form.current[2].value = "john.doe@example.com";
    form.current[3].value = "2022-12-28";
    checkInput();
    expect(checkDate).toHaveBeenCalled();
  });
});
