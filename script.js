
let array = localStorage.array ? JSON.parse(localStorage.array) : []; // Store The data
let correct = localStorage.array ? JSON.parse(localStorage.correct) : 0; // Store # of correct
let forbidden = localStorage.array ? JSON.parse(localStorage.forbidden) : 0;// Store # of forbidden
let late = localStorage.array ? JSON.parse(localStorage.late) : 0;// Store # of late
const Styles = ['', "correct", "forbidden", "late"]; // Styles (Themes) of rows


// To create the date
makeDate = () => {
    let Table = document.getElementById("table");
    Table.innerHTML +=
        `
        <tr>
            <td class="title" colspan="6" id="titleDate"> Attendance for  ${new Date().toLocaleDateString()} </td>
        </tr> 

    `
}


// To make the head of the table
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


// To make the footer for the table (Statistics)
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


// To make the buttons under the table
makeButtons = () => {
    let Table = document.getElementById("table");
    Table.innerHTML +=
        `
    <tr>
        <td colspan="6">
            <div class="lastDiv">
                <div class="ADD" onclick = "ShowAdd(); console.log(1);">
                    Add Students
                </div>
                <div class="CLEAR" onclick = "clearAll();">
                    Clear All
                </div>
                <div class="SAVE" onclick = "saveDoc();">
                    Save 
                </div>
                
                
            </div>
        </td>
    </tr>
    <tr>
        <td colspan = "6">
            <div class="lastDiv">  
                <div class="DELETE-SPEC" onclick = "Delete();">
                    Delete Students
                </div>
                <div class="DELETE-ALL" onclick = "edit();">
                    Edit User
                </div>
                <div class="IMPORT" onclick = "importDoc();">
                    Import 
                </div>
                
            </div>

        </td>
    </tr>
    
    `
}


// To render items after start or after clear
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
                    ${array[i].FN}&nbsp${array[i].LN}
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
                            &#128337;
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


// To render items in the usual time
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
                    ${array[i].FN}&nbsp${array[i].LN}
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
                            &#128337;
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


// To show the div for 
ShowAdd = () => {
    const choice = prompt("Enter the choice : \n1. Add students\n" +
        "2. Add students with reset");
    switch (choice) {
        case '1':
            showAddDiv();
            break;
        case '2':
            showAddDivWithDelete();
            break;
        default:
            break;

    }
}


// Functions for add students without clear the attendance
showAddDivWithDelete = () => {
    console.log("showAddDivWithDelete");
    const x = document.getElementById("addStudentClear");
    x.style.display = "flex";
}

NEXTC = () => {
    let idd = document.getElementById("studentIDC");
    let fnn = document.getElementById("studentFNC");
    let lnn = document.getElementById("studentLNC");
    let addStudent = document.getElementById("addStudentClear");
    if (idd.value == "" || fnn.value == "" || lnn.value == "") {
        window.alert("This Page says\n" + "Pleas fill all the fields!");
        addStudent.style.display = "flex";
    }
    else {

        let item = {
            ID: idd.value,
            FN: fnn.value,
            LN: lnn.value,
            Style: Styles[0],
        };
        idd.value = "";
        lnn.value = "";
        fnn.value = "";

        array.push(item);
    }
}

ADD_DELETE = () => {
    let idd = document.getElementById("studentIDC");
    let fnn = document.getElementById("studentFNC");
    let lnn = document.getElementById("studentLNC");
    let addStudent = document.getElementById("addStudentClear");
    if (idd.value == "" && fnn.value == "" && lnn.value == "") {
        array.forEach(element => {
            element.Style = "";
        });
        addStudent.style.display = "";
        renderItemsStart();
        saveLocalStorage();
    }
    else if (idd.value == "" || fnn.value == "" || lnn.value == "") {
        window.alert("This Page says\nPlease fill all the fields or Clear Them!");
        addStudent.style.display = "flex";
    }
    else {

        let item = {
            ID: idd.value,
            FN: fnn.value,
            LN: lnn.value,
            Style: Styles[0],
        };
        idd.value = "";
        lnn.value = "";
        fnn.value = "";

        array.push(item);
        array.forEach(element => {
            element.Style = "";
        });
        addStudent.style.display = "";
        renderItemsStart();
        saveLocalStorage();
    }

}

cancelC = () => {
    let x = document.getElementById("addStudentClear");
    let idd = document.getElementById("studentIDC");
    let fnn = document.getElementById("studentFNC");
    let lnn = document.getElementById("studentLNC");
    idd.value = "";
    lnn.value = "";
    fnn.value = "";
    x.style.display = "";
}


// Functions for add students without clear the attendance
showAddDiv = () => {
    console.log("showAddDiv");
    let x = document.getElementById("addStudent");
    x.style.display = "flex";
}
NEXT = () => {
    let idd = document.getElementById("studentID");
    let fnn = document.getElementById("studentFN");
    let lnn = document.getElementById("studentLN");
    let addStudent = document.getElementById("addStudent");
    if (idd.value == "" || fnn.value == "" || lnn.value == "") {
        window.alert("This Page says\n" + "Pleas fill all the fields!");
        addStudent.style.display = "flex";
    }
    else {

        let item = {
            ID: idd.value,
            FN: fnn.value,
            LN: lnn.value,
            Style: Styles[0],
        };
        idd.value = "";
        lnn.value = "";
        fnn.value = "";

        array.push(item);
    }
}

ADD = () => {
    let idd = document.getElementById("studentID");
    let fnn = document.getElementById("studentFN");
    let lnn = document.getElementById("studentLN");
    let addStudent = document.getElementById("addStudent");
    if (idd.value == "" && fnn.value == "" && lnn.value == "") {
        addStudent.style.display = "";
        renderItems();
        saveLocalStorage();
    }
    else if (idd.value == "" || fnn.value == "" || lnn.value == "") {
        alert("This Page says\nPlease fill all the fields or Clear Them!");
        addStudent.style.display = "flex";
    }
    else {

        let item = {
            ID: idd.value,
            FN: fnn.value,
            LN: lnn.value,
            Style: Styles[0],
        };
        idd.value = "";
        lnn.value = "";
        fnn.value = "";

        array.push(item);
        addStudent.style.display = "";
        renderItems();
        saveLocalStorage();
    }


}

cancel = () => {
    let x = document.getElementById("addStudent");
    let idd = document.getElementById("studentIDC");
    let fnn = document.getElementById("studentFNC");
    let lnn = document.getElementById("studentLNC");
    idd.value = "";
    lnn.value = "";
    fnn.value = "";
    x.style.display = "";
}


// To clear all Statistics
clearAll = () => {
    array.forEach(element => {
        element.Style = "";
    });

    renderItemsStart();
    saveLocalStorage();
}


// To mark each row with its theme (attribute)
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


// To save data at the local storage
saveLocalStorage = () => {
    localStorage.array = JSON.stringify(array);
    localStorage.correct = JSON.stringify(correct);
    localStorage.forbidden = JSON.stringify(forbidden);
    localStorage.late = JSON.stringify(late);
}


// To Start the whole Javascript
Run = () => {
    localStorage.array ? renderItems() : renderItemsStart();
    saveLocalStorage();
}


// To delete students
Delete = () => {
    let choice = prompt("Enter the choice : \n 1. Delete one student\n 2. Delete all");
    switch (choice) {
        case '1':
            deleteOne();
            break;
        case '2':
            deleteAll();
            break;
        default:
            break;

    }
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

        if (ind && ind < array.length) {
            correct -= array[ind].Style == Styles[1];
            forbidden -= array[ind].Style == Styles[2];
            late -= array[ind].Style == Styles[3];

            array.splice(ind - 1, 1);
            renderItems();
            saveLocalStorage();
        }
    }
}


// To save the data in CSV file
saveDoc = () => {
    let csvContent = "data:text/csv;charset=utf-8,";

    array.forEach((element, i) => {
        let row = [
            element.ID,
            element.FN,
            element.LN,
            element.Style == "" ? "none" :
                element.Style == "correct" ? "present" :
                    element.Style == "forbidden" ? "absent" : "late",
        ]

        console.log(row);
        csvContent += row + "\r\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sheet.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}


// To import the data from CSV file
importDoc = () => {
    console.log(1);
}

edit = () => {
    console.log(2);

}


// Start
Run();
