// useClass If a service/class is provided in the DI and if we want to initiate another service/class instead
    // of it whenever that service/class is instantiated we use useClass.
    // {provide: LoggerService, useClass: ExampleLoggerService}
    // constructor(loggerService: LoggerService)

// useExisting: Preventing duplicate instantiation.
    // {provide: LoggerService, useClass: ExampleLoggerService}
    // constructor(loggerService: LoggerService, exampleLoggerService: ExampleLoggerService)
    // with useExisting this two objects will be pointing to the same instance which is not true 
    // with useClass

// useValue: It is used when we are instantiating with a reference of a none class/service
    // (some legacy class).
    // {provide: LoggerService, useValue: LegacyLogger}

// useFactory

// how do we provide dependencies?
// 1. In providers property of component, directive, module
// 2. Inside Injectable annotation.