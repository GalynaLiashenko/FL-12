const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

rootNode.innerHTML = '<ul>';
structure.forEach(
    function a (value) {
       // console.log(value);
        if (value.folder === true) {
        rootNode.innerHTML = rootNode.innerHTML + 
        ' <li ><i class="material-icons" id="folder">folder</i>' + '<a href onclick="myFunction()">'+
         value.title +'</a>'+ '</li>';
           let child = value.children;
        child.forEach(function a (value) {
             
                if (value.folder === true) {
                    rootNode.innerHTML = rootNode.innerHTML + 
                    '<ul > <li id="hidden"> <i class="material-icons" id="folder">folder</i>  ' 
                    +'<a href onclick="myFunction()" >'+value.title +'</a>'+ '</li>';
                } else {
 rootNode.innerHTML = rootNode.innerHTML + 
 '<ul> <li id="hidden"> <i class="material-icons" id="file">insert_drive_file</i> '
  + value.title + '</li>'; 
}
                if (value.folder === true) {
                    let child = value.children;
                    child.forEach(function a (value) {
                        if (value.folder === true) {
                            rootNode.innerHTML = rootNode.innerHTML + 
                            '<ul> <li id=""> <i class="material-icons" id="folder">folder</i>  '
                             +'<a href onclick="myFunction()">'+value.title +'</a>' + '</li>';
                        } else {
 rootNode.innerHTML = rootNode.innerHTML +
  ' <ul> <li id="hidden"> <i class="material-icons" id="file">insert_drive_file</i>  '
   + value.title + '</li>'; 
                                }
                                                   })
                                            }
                                          })

                   }      
    })
rootNode.innerHTML = rootNode.innerHTML + '</ul>'; 

