$('#date-picker').datetimepicker({
   timepicker: false,
   datepicker: true,
   format: 'Y-m-d',
   value: '2020-11-19',
   weeks: true
})

$('#time-picker').datetimepicker({
   timepicker: true,
   datepicker: false,
   format: 'H:i',
   value: 'defaultTime',
   hours12: false,
   step: 5
})