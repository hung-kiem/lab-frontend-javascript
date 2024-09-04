var courseApi = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourse);
    handleCreateForm();
}

start();

function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
        .catch(function(err) {
            console.log(err);
        });
}

function renderCourse(course) {
    var blockElement = document.querySelector('#course-list');
    var html = course.map(function(course) {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.author}</p>
        </li>
        `;
    });
    blockElement.querySelector('ul').innerHTML = html.join('');
}

function handleCreateForm() {
    var createBtn = document.getElementById('add-course');
    console.log(createBtn);
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var author = document.querySelector('input[name="author"]').value;
        var formData = {
            name: name,
            author: author
        }
        var option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch(courseApi, option)
            .then(function(response) {
                return response.json();
            })
            .then(function() {
                getCourses(renderCourse);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}

