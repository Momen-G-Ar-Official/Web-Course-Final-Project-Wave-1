
let array = localStorage.array ? JSON.parse(localStorage.array) : [];
let correct = localStorage.array ? JSON.parse(localStorage.correct) : 0;
let forbidden = localStorage.array ? JSON.parse(localStorage.forbidden) : 0;
let late = localStorage.array ? JSON.parse(localStorage.late) : 0;
const Styles = ['', "correct", "forbidden", "late"];


makeDate = () => {
    let Table = document.getElementById("table");
    Table.innerHTML +=
        `
        <tr>
            <td class="title" colspan="6" id="titleDate"> Attendance for  ${new Date().toLocaleDateString()} </td>
        </tr> 

    `
}

makeHead = () => {
    let Table = document.getElementById("table");
    Table.innerHTML +=
        `
    <tr> 
        <td class="head NUM">
            Num
        </td>
        <td class="head SID">
            Student ID
        </td>
        <td class="head SN">
            Student Name
        </td>
        <td class="head" colspan="3">
            Attendance
        </td>
    </tr>
    `
}

makeFooter = () => {
    let Table = document.getElementById("table");
    Table.innerHTML +=
        `
    <tr>
        <td colspan="3" class = "bottom cell Left">
            Statistics
        </td>
        <td class="bottom cell">
            ${correct}
        </td>
        <td class="bottom cell">
            ${forbidden}
        </td>
        <td class="bottom cell">
            ${late}
        </td>
    </tr>

    `
}

makeButtons = () => {
    let Table = document.getElementById("table");
    Table.innerHTML +=
        `
    <tr>
        <td colspan="6">
            <div class="lastDiv">
                <div class="ADD" onclick = "showAdd();">
                    Add Students
                </div>
                <div class="SAVE" onclick = "saveDoc();">
                    Save 
                </div>
                <div class="CLEAR" onclick = "clearAll();">
                    Clear All
                </div>
                
            </div>
        </td>
    </tr>
    <tr>
        <td colspan = "6">
            <div class="lastDiv">  
                <div class="DELETE-SPEC" onclick = "deleteOne();">
                    Delete One Student
                </div>
                <div class="DELETE-ALL" onclick = "deleteAll();">
                    Delete All
                </div>
            </div>

        </td>
    </tr>
    
    `
}

renderItemsStart = () => {
    let Table = document.getElementById("table");
    Table.innerHTML = "";
    correct = 0, forbidden = 0, late = 0;
    makeDate();
    makeHead();

    if (array.length == 0) {
        const thisItem = `
            <tr> 
                <td colspan = "6" >
                    <div class ="empty">
                        There is no Students
                    </div>
                </td>
            </tr>
        `;
        Table.innerHTML += thisItem;
    }
    else {
        for (let i = 0; i < array.length; i++) {

            const thisItem = `
            <tr>
    
                <!-- The next row has cells each cell will have one of the object attributes  -->
                <!-- This row will build with JS -->
    
                <td class="cell Left">
                    ${i + 1}
                </td>
                <td class="cell">
                    ${array[i].ID}
                </td>
                <td class="cell">
                    ${array[i].N}
                </td>
    
                <!-- Each cell will have specific function -->
                <td class="cell">
                    <div class="img">
                        <div class="button" onclick = "correctFunction(${i})">
                            &#9989
                        </div>
                    </div>
                </td>
    
                <td class="cell">
                    <div class="img">
                        <div class="button" onclick = "forbiddenFunction(${i})">
                            &#128683;
                        </div>
                    </div>
                </td>
                <td class="cell">
                    <div class="img">
                        <div class="button" onclick = "lateFunction(${i})">
                            <img src="images/late.png" alt="Late IMage" class="images Late">
                        </div>
                    </div>
                </td>
            
            </tr>
    
            `;
            Table.innerHTML += thisItem;
        }
    }



    makeFooter();
    makeButtons();
}

renderItems = () => {
    let Table = document.getElementById("table");
    Table.innerHTML = "";
    makeDate();
    makeHead();
    if (array.length == 0) {
        const thisItem = `
            <tr> 
                <td colspan = "6" >
                    <div class ="empty">
                        There is no Students
                    </div>
                </td>
            </tr>
        `;
        Table.innerHTML += thisItem;
    }
    else {

        for (let i = 0; i < array.length; i++) {

            const thisItem = `
            <tr>
            
                <!-- The next row has cells each cell will have one of the object attributes  -->
                <!-- This row will build with JS -->
                
                <td class="cell Left ${array[i].Style}">
                    ${i + 1}
                </td>
                <td class="cell ${array[i].Style}">
                    ${array[i].ID}
                </td>
                <td class="cell ${array[i].Style}">
                    ${array[i].N}
                </td>

                <!-- Each cell will have specific function -->
                <td class="cell ${array[i].Style}">
                    <div class="${array[i].Style == "" ? "img" : "hiddenImg"}">
                        <div 
                        class="${array[i].Style == "" ? "button" : array[i].Style == "correct" ? "AFTER" : "hidden"}"
                        onclick = "correctFunction(${i})">
                            &#9989
                        </div>
                    </div>
                </td>
                
                <td class="cell ${array[i].Style}">
                    <div class="${array[i].Style == "" ? "img" : "hiddenImg"}">
                        <div 
                        class="${array[i].Style == "" ? "button" : array[i].Style == "forbidden" ? "AFTER" : "hidden"}"
                        onclick = "forbiddenFunction(${i})">
                            &#128683;
                        </div>
                    </div>
                </td>
                <td class="cell ${array[i].Style}">
                    <div class="${array[i].Style == "" ? "img" : "hiddenImg"}">
                        <div
                        class="${array[i].Style == "" ? "button" : array[i].Style == "late" ? "AFTER" : "hidden"}"
                        onclick = lateFunction(${i})>
                            <img src="images/late.png" alt="Late IMage" class="images Late ${array[i].Style == 'late' ? "showImages" : ""}">
                        </div>
                    </div>
                </td>
                
            </tr>
            
            `;
            Table.innerHTML += thisItem;
        }
    }


    makeFooter();
    makeButtons();
}

ADD = () => {
    let idd = document.getElementById("studentID");
    let fnn = document.getElementById("studentFN");
    let lnn = document.getElementById("studentLN");
    let addStudent = document.getElementById("addStudent");
    if (idd.value == "" || fnn.value == "" || lnn.value == "") {
        window.alert("This Page says", "Pleas fill all the fields!");
        addStudent.style.display = "flex";
    }
    else {

        let item = {
            ID: idd.value,
            N: lnn.value + " " + fnn.value,
            Style: Styles[0],
        };
        idd.value = "";
        lnn.value = "";
        fnn.value = "";

        array.forEach(element => {
            element.Style = "";
        });

        array.push(item);
        addStudent.style.display = "";
        renderItemsStart();
        saveLocalStorage();
    }
}

showAdd = () => {
    let x = document.getElementById("addStudent");
    x.style.display = "flex";
}

cancel = () => {
    let x = document.getElementById("addStudent");
    x.style.display = "";
}

clearAll = () => {
    array.forEach(element => {
        element.Style = "";
    });

    renderItemsStart();
    saveLocalStorage();
}

correctFunction = (value) => {
    if (array[value].Style == "") {
        array[value].Style = "correct";
        correct++;
        renderItems();
        saveLocalStorage();
    }

}

forbiddenFunction = (value) => {
    if (array[value].Style == "") {
        array[value].Style = "forbidden";
        forbidden++;
        renderItems();
        saveLocalStorage();
    }
}

lateFunction = (value) => {
    if (array[value].Style == "") {
        array[value].Style = "late";
        late++;
        renderItems();
        saveLocalStorage();
    }
}

saveLocalStorage = () => {
    localStorage.array = JSON.stringify(array);
    localStorage.correct = JSON.stringify(correct);
    localStorage.forbidden = JSON.stringify(forbidden);
    localStorage.late = JSON.stringify(late);
}

Run = () => {
    localStorage.array ? renderItems() : renderItemsStart();
    saveLocalStorage();
}

deleteAll = () => {
    array.splice(0, array.length);
    correct = 0, forbidden = 0, late = 0;
    renderItemsStart();
    saveLocalStorage();
}
deleteOne = () => {
    if (array.length) {
        let ind = prompt("Enter The student NUM");
        array.splice(ind - 1, 1);
        renderItemsStart();
        saveLocalStorage();
    }

}

Run();
