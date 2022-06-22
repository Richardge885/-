// default today for date choice
document.getElementById('date').value = new Date().toISOString().substring(0, 10);

// dafault current time for time choice
document.getElementById('time').value = new Date().toISOString().substring(11, 16);
