Swal.fire({
  title: "ENTER YOUR AGE",
  input: "number",
  Text: "Please enter your age",
    icon: "question",
  didOpen: () => {
    const input = Swal.getInput();
    input.value = '20';
  }
});