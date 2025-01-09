from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=35)
    patronymic_name = models.CharField(max_length=30)
    salary = models.DecimalField(max_digits=10, decimal_places=2)

class Department(models.Model):
    name = models.CharField(max_length=30)
    department_head = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, null=True, blank=True)

class DepartmentMembers(models.Model):
    name = models.CharField(max_length=30)
    employee = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, null=True, blank=True)
    department = models.ForeignKey(Department, on_delete=models.DO_NOTHING, null=True, blank=True)

class Team(models.Model):
    name = models.CharField(max_length=30)
    team_leader = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, null=True, blank=True)

class DepartmentTeams(models.Model):
    team = models.ForeignKey(Team, on_delete=models.DO_NOTHING, null=True, blank=True)
    department = models.ForeignKey(Department, on_delete=models.DO_NOTHING, null=True, blank=True)

