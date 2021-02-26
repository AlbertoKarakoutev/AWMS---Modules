# AWMS---Modules
Contains the developed modules for the Administrative Worker Management System
The modules should follow the following schematic:
    * Zip Archive: \<ModuleName\>.zip (Uppercase)  
        * Folder: \<ModuleName\> (Uppercase)  
            * Folder: \<moduleName\> (Lowercase)  
                * \<ModuleName\>Controller.java (Uppercase, containing all the endpoints of the network components)  
                * \<ModuleName\>Service.java (Uppercase, containing all the business logic of the module)  
                * \<moduleName\>.jsp (Lowercase, being the JSP view file of the module)
                * (Optional) Folder: data (Containing any repos and POJO classes for the module)  
                __The database would need to be updated if new POJOs and repos are added as a module!__
