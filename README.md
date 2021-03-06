# Visualizing Data with Leaflet

## Background

![1-Logo](Images/1-Logo.png)

The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

I have built a new set of tools that visualized earthquake data. The USGS collects a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Visualizing this data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

### Basic Visualization

![2-BasicMap](Images/2-BasicMap.png)

The first task was to visualize an earthquake data set.

1. **Data Set**

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and picked the 30 day data set to visualize.

   ![4-JSON](Images/4-JSON.png)

2. **Imported & Visualized the Data**

   Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * Data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

   * Included popups that provide additional information about the earthquake when a marker is clicked.

   * Created a legend to provide context for map data.
