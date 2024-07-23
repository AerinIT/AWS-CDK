import * as cdk from '@aws-cdk/core';
import * as cloudwatch from '@aws-cdk/aws-cloudwatch';

export class CloudwatchDashboardStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dashboard = new cloudwatch.Dashboard(this, 'SampleDashboard', {
      dashboardName: 'sample-metrics',
    });

    const apiGateway4xxErrorMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: '4XXError',
      dimensionsMap: { ApiId: '7r82euqtv8' },
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
    });

    const apiGateway5xxErrorMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: '5XXError',
      dimensionsMap: { ApiId: '7r82euqtv8' },
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
    });

    const apiGatewayCountMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: 'Count',
      dimensionsMap: { ApiId: '7r82euqtv8' },
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
    });

    const apiGatewayLatencyMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: 'Latency',
      dimensionsMap: { ApiId: '7r82euqtv8' },
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
    });

    const apiGatewayIntegrationLatencyMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: 'IntegrationLatency',
      dimensionsMap: { ApiId: '7r82euqtv8' },
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
    });

    const apiGatewayDataProcessedMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: 'DataProcessed',
      dimensionsMap: { ApiId: '7r82euqtv8' },
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
    });

    dashboard.addWidgets(
      new cloudwatch.SingleValueWidget({
        title: '4XX Errors',
        metrics: [apiGateway4xxErrorMetric],
      }),
      new cloudwatch.SingleValueWidget({
        title: '5XX Errors',
        metrics: [apiGateway5xxErrorMetric],
      }),
      new cloudwatch.SingleValueWidget({
        title: 'API Count',
        metrics: [apiGatewayCountMetric],
      }),
      new cloudwatch.SingleValueWidget({
        title: 'Latency',
        metrics: [apiGatewayLatencyMetric],
      }),
      new cloudwatch.SingleValueWidget({
        title: 'Integration Latency',
        metrics: [apiGatewayIntegrationLatencyMetric],
      }),
      new cloudwatch.SingleValueWidget({
        title: 'Data Processed',
        metrics: [apiGatewayDataProcessedMetric],
      })
    );
  }
}
