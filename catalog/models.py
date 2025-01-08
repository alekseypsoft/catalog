from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=35)
    patronymic_name = models.CharField(max_length=30)
    salary = models.DecimalField(max_digits=2, decimal_places=2)
    boss = models.ForeignKey("self", on_delete=models.DO_NOTHING, null=True, blank=True)

