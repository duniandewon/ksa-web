export interface Service {
  serviceName: string;
  serviceDescription: string;
  serviceIcon: string;
}

export function Service({ service }: { service: Service }) {
  return (
    <div className="flex gap-4">
      <div className="w-16 h-14 bg-primary" />
      <div>
        <h3 className="font-semibold text-primary-foreground">{service.serviceName}</h3>
        <p>{service.serviceDescription}</p>
      </div>
    </div>
  );
}
