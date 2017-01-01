#!/usr/local/bin/python

from xml.dom import minidom
xmldoc = minidom.parse('martinsblerrg.wordpress.2016-03-23.xml')
itemlist = xmldoc.getElementsByTagName('item')
for s in itemlist:
    category = s.getElementsByTagName("category")[0].firstChild.data
    if category == "Artikler":
        print(s.getElementsByTagName("title")[0].firstChild.data)
