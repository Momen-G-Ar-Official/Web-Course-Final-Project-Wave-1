
let array = localStorage.array ? JSON.parse(localStorage.array) : [];
let correct = 0, forbidden = 0, late = 0;
const Styles = ["none", "correct", "forbidden", "late"];


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

makeFooter = () => 
{
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
    `
}

renderItems = () => {
    let Table = document.getElementById("table");
    Table.innerHTML = "";
    makeDate();
    makeHead();

    for (let i = 0; i < 5; i++) {

        Table.innerHTML += `
        <tr>

            <!-- The next row has cells each cell will have one of the object attributes  -->
            <!-- This row will build with JS -->

            <td class="cell Left">
                ${i + 1}
            </td>
            <td class="cell">
                 ${/*array[i].ID*/i}
            </td>
            <td class="cell">
                ${/*array[i].FN} &nbsp ${array[i].LN*/i}
            </td>

            <!-- Each cell will have specific function -->
            <td class="cell ${array[i].Style == "correct"? "correct" : "hidden" }">
                <div class="img">
                    <div class="button">
                        <img src="images/Correct.jpg" alt="Correct Image" class="images Correct">
                    </div>
                </div>
            </td>

            <td class="cell ${array[i].Style == "forbidden"? "forbidden" : "hidden" }">
                <div class="img">
                    <div class="button">
                        <img src="images/Forbidden.jpg" alt="Forbidden Image" class="images Forbidden">
                    </div>
                </div>
            </td>
            <td class="cell ${array[i].Style == "late"? "late" : "hidden" }">
                <div class="img">
                    <div class="button">
                        <img src="images/late.png" alt="Late IMage" class="images Late">
                    </div>
                </div>
            </td>
        
        </tr>

        `;
    }


    makeFooter();
    makeButtons();
}

renderItemsStart = () => {
    let Table = document.getElementById("table");
    Table.innerHTML = "";
    makeDate();
    makeHead();

    for (let i = 0; i < array.length; i++) {

        const thisItem = `
        <tr class = "array[i].Style">

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
                    <div class="button">
                        <img src="images/Correct.jpg" alt="Correct Image" class="images Correct">
                    </div>
                </div>
            </td>

            <td class="cell">
                <div class="img">
                    <div class="button">
                        <img src="images/Forbidden.jpg" alt="Forbidden Image" class="images Forbidden">
                    </div>
                </div>
            </td>
            <td class="cell">
                <div class="img">
                    <div class="button">
                        <img src="images/late.png" alt="Late IMage" class="images Late">
                    </div>
                </div>
            </td>
        
        </tr>

        `;
        Table.innerHTML += thisItem;
    }


    makeFooter();
    makeButtons();
}

ADD = () => {
    let idd = document.getElementById("studentID");
    let fnn = document.getElementById("studentFN");
    let lnn = document.getElementById("studentLN");
    let addStudent = document.getElementById("addStudent");
    if(idd.value == "" || fnn.value == "" || lnn.value == "")
    { 
        window.alert("This Page says","Pleas fill all the fields!");
        addStudent.style.display = "flex";
    }
    else{

        let item = {
            ID : idd.value,
            FN : fnn.value,
            LN : lnn.value,
            Style : Styles[0],
        };
        idd.value = "";
        lnn.value = "";
        fnn.value = "";
        array.push(item);
        console.log(array);
        addStudent.style.display = "none";
        renderItemsStart();
    }
}


renderItemsStart();

showAdd = () => {
    let x = document.getElementById("addStudent");
    x.style.display = "flex";
}

cancel = () => {
    let x = document.getElementById("addStudent");
    x.style.display = "none";
}