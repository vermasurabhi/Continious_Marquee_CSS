const clickMe=(id)=>{
    console.log(id)
    type=id
    if (type=="htmlc"){document.getElementById("mainimage").style.backgroundImage="url('./html.png')"}
    else if (type=="cssc"){document.getElementById("mainimage").style.backgroundImage="url('./css-3.png')"}
    else if (type=="jsc"){document.getElementById("mainimage").style.backgroundImage="url('./css-3.png')"}
    else if (type=="bootstrapc"){document.getElementById("mainimage").style.backgroundImage="url('./bootstrap.png')"}
    else if (type=="sqlc"){document.getElementById("mainimage").style.backgroundImage="url('./sql-server.png')"}
    else if (type=="mysqlc"){document.getElementById("mainimage").style.backgroundImage="url('./mysql.png')"}
    else if (type=="pythonc"){document.getElementById("mainimage").style.backgroundImage="url('./python.png')"}
    else if (type=="reactc"){document.getElementById("mainimage").style.backgroundImage="url('./library.png')"}
    
}

const clickOver=()=>{
    document.getElementById("mainimage").style.backgroundImage="none";
}

const frameClick=(id)=>{
    type=id;
    // if (type=="mark"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://vermasurabhi.github.io/Bootstrap_Markeddown_Previewer/"}
    // else if (type=="clock"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://vermasurabhi.github.io/Bootstrap-25-5-clock/"}
    // else if (type=="crm"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://github.com/vermasurabhi/CRM_Django"}
    // else if (type=="japanese"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://vermasurabhi.github.io/Bootstrap_Markeddown_Previewer/"}
    // else if (type=="drum"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://vermasurabhi.github.io/Bootstrap_Drum_Machine/"}
    // else if (type=="quote"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://vermasurabhi.github.io/bootstrap_Random_machine_generator/"}
    // else if (type=="calc"){document.getElementById("frame").style.display="block";
    // document.getElementById("frameme").src="https://vermasurabhi.github.io/Bootstrap_Javascriptcalculator/"}
    
}

const clean=()=>{
    document.getElementById("frame").style.display="none";
}