
export const filterForSearch = (searched, projects)=>{
    if(searched){
        return projects.filter(project=>project.title.toLowerCase().includes(searched)|| project.category.name.toLowerCase().includes(searched) )
    } else{
        return projects
    }
}