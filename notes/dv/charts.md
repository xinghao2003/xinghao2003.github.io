---
layout: default
title: Charts - Data Visualization
---

# Charts

## Bar Chart
![](images/bar_chart.png)
```python
import matplotlib.pyplot as plt

# Dummy data
categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]

# Create bar chart
plt.figure()
plt.bar(x=categories, height=values)
plt.title('Bar Chart')
plt.xlabel('Categories')
plt.ylabel('Values')
```

# Pie Chart
![](images/pie_chart.png)
```python
import matplotlib.pyplot as plt

# Dummy data
labels = ['A', 'B', 'C', 'D']
sizes = [25, 35, 20, 20]

# Create pie chart
plt.figure()
# Breakdown of autopct (formats the percentage display):
# '%1.1f%%' means 1 decimal place followed by a percent sign
# '%1.1f' formats the number, '%%' is a literal percent sign
plt.pie(x=sizes, labels=labels, autopct='%1.1f%%')
plt.title('Pie Chart')
```

# Scatter Plot
![](images/scatter_plot.png)
```python
import matplotlib.pyplot as plt
import numpy as np

# Dummy data
x = np.random.randn(50)
y = np.random.randn(50)
s = np.random.randint(10, 100, 50)
c = np.random.randint(0, 3, 50)

# Create scatter plot
plt.figure()
# Breakdown scatter plot
# s (size) represents the magnitude of each point
# c (color) represents the temperature of each point
plt.scatter(x, y, s=s, c=c)
plt.title('Scatter Plot')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.colorbar(label='Temperature')

```

# Line Chart
![](images/line_chart.png)
```python
import matplotlib.pyplot as plt
import numpy as np

# Dummy data
# Generates 100 evenly spaced values between 0 and 10
x = np.linspace(start=0, stop=10, num=100)
y = np.sin(x)

# Create line chart
plt.figure()
plt.plot(x, y)
plt.title('Line Chart')
plt.xlabel('X values')
plt.ylabel('Y values')
```
