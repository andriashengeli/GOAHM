Swal.fire({
  title: 'Welcome to Our Website!',
  text: 'We are glad to have you here. Enjoy your stay!',
  icon: 'success',
  confirmButtonText: 'Thank you!',
  confirmButtonColor: '#3085d6',
  draggable: true,
  timer: 14000,
  position: 'center',
  timerProgressBar: true,
  showCancelButton: true,
  cancelButtonText: 'Close❌',
})

Swal.fire({
  title: 'Important Update',
  text: 'Please note that our terms of service have changed. Click here to read the updated terms.',
  icon: 'warning',
  confirmButtonText: 'Read Terms',
  confirmButtonColor: '#d33',
  showCancelButton: true,
  cancelButtonText: 'Maybe Later ⏳⏳',
  cancelButtonColor: '#aaa',
  position: 'top-end'
})

Swal.fire({
  title: "please choose an fruit you like",
  input: 'select',
  inputOptions: {
    fruits: {
      apple: 'Apple',
      banana: 'Banana',
      cherry: 'Cherry',
      date: 'Date',
      elderberry: 'Elderberry'
    },
    vagatable: {
      carrot: 'Carrot',
      broccoli: 'Broccoli',
      spinach: 'Spinach',
      potato: 'Potato',
      cucumber: 'Cucumber'
    }
  }
})