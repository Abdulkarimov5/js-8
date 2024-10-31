/* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild */

/* Как найти?…

Таблицу с id="age-table".

Все элементы label внутри этой таблицы (их три).

Первый td в этой таблице (со словом «Age»).

Форму form с именем name="search".

Первый input в этой форме.

Последний input в этой форме.


let table = document.getElementById('age-table')


table.getElementsByTagName('label')
document.querySelectorAll('#age-table label')

table.rows[0].cells[0]
table.getElementsByTagName('td')[0]
table.querySelector('td')

let form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]')

form.getElementsByTagName('input')[0]
form.querySelector('input')

let inputs = form.querySelectorAll('input')
inputs[inputs.length-1] */

/* <!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    // your code
  </script>
</body>
</html>

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    // получаем элемент
    let elem = document.querySelector('[data-widget-name]');

    // читаем значение
    alert(elem.dataset.widgetName);
    // или так
    alert(elem.getAttribute('data-widget-name'));
  </script>
</body>
</html> */

