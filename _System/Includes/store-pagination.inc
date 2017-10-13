 
    
{% comment -%}
    This pagination include file is a beta version and not guaranteed to work. 
    We have tested it as much as we can but sometimes it has to be in production before potential problems show up. 
    If you have trouble with it let us know and we will try to update it, or just go back to the built in BC pagination.
    Dave Haggblad - BC Gurus March 2016
{% endcomment -%}
   
   
{% unless globals.get.productid -%}

    
	{module_catalogueselect parentId="-1" collection="allCatalogs" template=""}
    	{% assign theStoreID = allCatalogs.items[0].id -%}
	{module_cataloguelistdump catalogId="{{theStoreID}}" collection="theCatalog" template=""}

    {% assign theURL = "/store" -%}
    {% if theCatalog.items -%}
        {% for item in theCatalog.items -%}
            {% if item.name == name -%}
                {% assign theURL = item.url -%}	
            {% endif -%}
        {% endfor -%}
    {% endif -%}
    
    <ul class="pagination text-center" role="navigation" aria-label="Pagination">
        {% unless globals.get.productid -%}
            {% if pagination.previousPageUrl and pagination.previousPageUrl != "" -%}
                <li class="pagination-previous"><a href="{{pagination.previousPageUrl}}{% if globals.get.filter -%}&Filter={{globals.get.filter}}{% endif -%}" aria-label="Previous Page">Previous </a></li>
            {% else -%}
                <li class="pagination-previous disabled">Previous </li>
            {% endif -%}
        {% endunless -%}
    
        {% assign preEllipsis = false -%}
        {% assign postEllipsis = false -%}
        {% for i in (1..pagination.numberOfPages) -%}
            {% assign efinish = pagination.numberOfPages | minus: 0 -%}
            {% assign overlap = pagination.currentPage | plus: 2 -%}
            {% assign underlap = pagination.currentPage | minus: 2 -%}
    
            {% if i == pagination.currentPage -%}
                <li class="current">{{i}}</li>
            {% elseif i > 1 and i < underlap and pagination.numberOfPages > 10 and efinish > i -%}
                {% if preEllipsis == false -%}
                    <li class="ellipsis" aria-hidden="true"></li>
                    {% assign preEllipsis = true -%}
                {% endif -%}
            {% elseif i > pagination.currentPage and i > overlap and pagination.numberOfPages > 10 and efinish > i  -%}
                {% if postEllipsis == false -%}
                    <li class="ellipsis" aria-hidden="true"></li>
                    {% assign postEllipsis = true -%}
                {% endif -%}
            {% else -%}
                <li><a href="{{theURL}}?Page={{i}}&Items={{pagination.itemsPerPage}}{% if globals.get.filter -%}&Filter={{globals.get.filter}}{% endif -%}" aria-label="Page {{i}}">{{i}}</a></li>
            {% endif -%}
        {% endfor -%}
        
        {% unless globals.get.productid -%}
            {% if pagination.nextPageUrl and pagination.nextPageUrl != "" -%}
                <li class="pagination-next"><a href="{{pagination.nextPageUrl}}{% if globals.get.filter -%}&Filter={{globals.get.filter}}{% endif -%}" aria-label="Next page">Next <span class="show-for-sr">page</span></a></li>
            {% else -%}
                <li class="pagination-next disabled">Next <span class="show-for-sr">page</span></li>
            {% endif -%}
        {% endunless -%}   
    </ul>
{% endunless -%}  