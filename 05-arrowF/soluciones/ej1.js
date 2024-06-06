
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

const exec_ej1 = () => {
    ask(
        "Do you agree?",
        () => { alert("You agreed."); },
        () => { alert("You canceled the execution."); }
    );
}
    
