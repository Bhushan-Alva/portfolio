from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "MoneyMap/Home.html")

def accounts(request):
    return render(request, "MoneyMap/accounts.html")

def budget(request):
    return render(request, "MoneyMap/budget.html")

def expense(request):
    return render(request, "MoneyMap/expense.html")

def goals(request):
    return render(request, "MoneyMap/goals.html")

def income(request):
    return render(request, "MoneyMap/income.html")

def insights(request):
    return render(request, "MoneyMap/insights.html")

def settings(request):
    return render(request, "MoneyMap/settings.html")

def transaction(request):
    return render(request, "MoneyMap/transaction.html")

