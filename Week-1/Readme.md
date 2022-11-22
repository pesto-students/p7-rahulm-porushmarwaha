## What is the main funtionality of the Browser?

A web browser, is a software application that you use to browse the World Wide Web. It works by sending a request to a web server and then receives a response 
containing the content that is to be displayed on the screen of your device. Once the browser is open on your device, there is the address bar where you input the 
address of the website that you want to visit. The address is commonly known as the Uniform Resource Locator or URL for short. The URL contains the protocol or the 
HTTP, the domain name, usually the name of the website, and the file path, or the path to the page that is displayed. When you make a request using this URL, 
the browser and server communicate using a protocol known as the Hypertext Transfer Protocol or HTTP. Once the web browser receives the content, it displays it on the 
screen of your device.

## High Level Components of a browser ?
The browser's main components are:

**The user interface:** this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

**The browser engine:** marshals actions between the UI and the rendering engine.

**The rendering engine:** responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

**Networking:** for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

**UI backend:** used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

**JavaScript interpreter:** Used to parse and execute JavaScript code.

**Data storage :** This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![High Level Components of Browser](./images/HIghLevelComponent.png?raw=true "Title")

## Rendering engine and its use
Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.

The four basic steps include:

1 - The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”

2 - Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.

3 - Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.

4 - The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

![Rendering Engine](./images/rendering%20engine.jpg?raw=true "Title")

## Parsers (HTML, CSS, etc)
Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers. The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction.

## Script Processors
The script processor executes Javascript code to process an event.

## Tree construction
1- Starting at the root of the DOM tree, traverse each visible node. Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.Some nodes are hidden via CSS and are also omitted from the render tree.because we have an explicit rule that sets the "display: none" property on it.

2- For each visible node, find the appropriate matching CSSOM rules and apply them.

3- Emit visible nodes with content and their computed styles.

## Order of script processing
![Order of Script Processing and Rendering Engine](./images/Order%20od%20Script%20Processing.jpg.png?raw=true "Title")