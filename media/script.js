function calcMedia() {
  const grade1 = parseInt(document.querySelector('#grade1').value);
  const grade2 = parseInt(document.querySelector('#grade2').value);
  const p = document.querySelector('#result');

  result = (grade1 + grade2) / 2;
  console.log(result);

  p.textContent = result;
  p.classList = 'active';

  if(result >= 6)
    p.textContent += ' = Aprovado!';
  else
    p.textContent += ' = Não aprovado.';
}