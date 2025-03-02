from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='money_map_home'),
    path('income/', views.income, name='money_map_income'),
    path('accounts/', views.accounts, name='money_map_accounts'),
    path('budget/', views.budget, name='money_map_budget'),
    path('expense/', views.expense, name='money_map_expense'),
    path('goals/', views.goals, name='money_map_goals'),
    path('insights/', views.insights, name='money_map_insights'),
    path('settings/', views.settings, name='money_map_settings'),
    path('transaction/', views.transaction, name='money_map_transaction'),

    
]

