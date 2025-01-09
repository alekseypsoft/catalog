from django.core.management.base import BaseCommand, CommandError
from catalog.models import Employee
from faker import Faker

class Command(BaseCommand):
    help = "Добавление тестовых данных в базу данных"

    def handle(self, *args, **options):
        fake = Faker()
        e = Employee(first_name=fake.name(),
                     last_name=fake.last_name(),
                     patronymic_name=fake.name(),
                     salary=50)
        e.save(force_insert=True)

        self.stdout.write(
            self.style.SUCCESS('Данные успешно вставлены')
        )