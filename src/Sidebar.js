import './index.css';
import GoalForm from './GoalForm.js'

function Sidebar({setGoal, goals}) {

    function open_sidebar() {
        let sidebar = document.getElementById("timerSidebar");
        sidebar.style.display = "block";
    }

    function close_sidebar() {
        let sidebar = document.getElementById("timerSidebar");
        sidebar.style.display = "none";
    }


    return (
        <div class='sidebar sidebar_button'>
            <div>
                <h1> Work Time </h1>
                <div style={{}}>
                    <input style={{size:"100px", backgroundColor:"rgb(108,105,105)"}} value={goals[1]}>
                    </input>
                    <input style={{}}>
                    </input>
                </div>
            </div>
            <GoalForm></GoalForm>
        </div>
        
    )
} export default Sidebar