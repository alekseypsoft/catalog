from django.core.management.base import BaseCommand, CommandError
from catalog.models import Employee, Department, DepartmentMembers, Team, DepartmentTeams
from faker import Faker

class Command(BaseCommand):
    help = "Добавление тестовых данных в базу данных"

    def handle(self, *args, **options):
        fake = Faker()
        employee = Employee(first_name=fake.name(),
                     last_name=fake.last_name(),
                     patronymic_name=fake.name(),
                     salary=50)
        employee.save()
        department = Department(
            name=fake.name(),
            department_head=employee)
        department.save()
        department_members = DepartmentMembers(
            name=fake.name(),
            employee=employee,
            department=department)
        department_members.save()
        team = Team(
            name=fake.name(),
            team_leader=employee)
        team.save()
        department_team = DepartmentTeams(team=team, department=department)
        department_team.save()

        self.stdout.write(
            self.style.SUCCESS('Данные успешно вставлены')
        )