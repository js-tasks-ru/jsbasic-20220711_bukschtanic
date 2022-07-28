function highlight(table) {
  for (let tr of table.children[1].rows) { 
    // Проставить класс `available/unavailable` в зависимости от значения атрибута `data-available` у ячейки `Status`. Если её значение `true` - класс `available`, если её значение `false` - класс `unavailable
    let available = tr.cells[3];
    if (available.hasAttribute("data-available"))
        switch (available.dataset.available) {
            case "true":
                tr.classList.add("available");
                break;
            case "false":
                tr.classList.add("unavailable");
        }
    // Проставить атрибут `hidden`, если атрибута `data-available` нет вообще.
        else  
        tr.hidden = true;
    // Проставить класс `male/female` в зависимости от содержимого ячейки `Gender`. Если её значение `m` - класс `male`, Если её значение `f` - класс `female`
    let gender = tr.cells[2].textContent;
    switch (gender) {
        case "m":
            tr.classList.add("male");
            break;
        case "f":
            tr.classList.add("female");
    }
    // Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
    let age = +tr.cells[1].textContent;
    if (age < 18) tr.style.textDecoration = "line-through";
}
    }
