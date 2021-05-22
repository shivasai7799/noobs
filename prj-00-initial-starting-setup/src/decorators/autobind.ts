
    //autobind decorator
    export function autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
        const originalDescriptor = descriptor.value;
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
    
    
            get() {
                const boundEn = originalDescriptor.bind(this);
                return boundEn;
            }
        };
        return adjDescriptor;
    }