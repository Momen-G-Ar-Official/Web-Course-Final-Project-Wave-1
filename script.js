
let array = localStorage.array ? JSON.parse(localStorage.array) : [];
let correct = 0, forbidden = 0, late = 0;


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
                <div class="ADD">
                    Add Students
                </div>
                <div class="SAVE">
                    Save 
                </div>
                <div class="CLEAR">
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

    for (let i = 0; i < 3; i++) {

        Table.innerHTML += `
        <tr>

            <!-- The next row has cells each cell will have one of the object attributes  -->
            <!-- This row will build with JS -->

            <td class="cell Left">
                ${i + 1}
            </td>
            <td class="cell">

            </td>
            <td class="cell">
            
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
    }


    makeFooter();
    makeButtons();
}

renderItems();