var Getphoto = function(employee)
{
    return employee.photo;
}
d3.select("body")
.selectAll("body")
.data(employees)
.enter()
.append("body")
.text(Getphoto)
