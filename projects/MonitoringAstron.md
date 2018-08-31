# Fine-grained energy consumption monitoring in computer clusters

**The idea**

Expose​ ​ detailed​ ​ energy​ ​ consumption​ ​ metrics​ ​ to​ ​ general​ ​ purpose​ ​ system monitoring​ ​ tools​ ​ for​ ​ trend​ ​ analysis.

**Background**
Efficient,​ ​ and​ ​ more​ ​ importantly​ ​ energy​ ​ efficient,​ ​ computing​ ​ is​ ​ highly dependent​ ​ on​ ​ accurate​ ​ monitoring​ ​ of​ ​ resource​ ​ utilisation​ ​ and​ ​ energy​ ​ consumption. 

**How​ ​ it​ ​ works**

Node​ ​ level​ ​ metrics​ ​ can​ ​ be​ ​ collected​ ​ using​ ​ a ​ ​ number​ ​ of​ ​ technologies, such​ ​ as​ ​ Prometheus​ ​ (https://prometheus.io​ ) ​ ​ or​ ​ OpenStack​ ​ Monasca (https://wiki.openstack.org/wiki/Monasca).​ ​ However,​ ​ none​ ​ of​ ​ the​ ​ currently​ ​ available​ ​ tools offer​ ​ the​ ​ ability​ ​ to​ ​ monitor​ ​ energy​ ​ consumed​ ​ by​ ​ the​ ​ system,​ ​ either​ ​ by​ ​ using​ ​ the​ ​ sensors integrated​ ​ in​ ​ modern​ ​ components​ ​ (see​ ​ for​ ​ instance​ ​ Intel​ ​ Running​ ​ Average​ ​ Power​ ​ Limit) or​ ​ by​ ​ exposing​ ​ the​ ​ information​ ​ gathered​ ​ by​ ​ the​ ​ energy​ ​ infrastructure​ ​ (for​ ​ instance​ ​ the Power​ ​ Distribution​ ​ Units).​ ​ In​ ​ this​ ​ project​ ​ we​ ​ will​ ​ write​ ​ a ​ ​ number​ ​ of​ ​ plug ins​ ​ for an​ ​ existing​ ​ monitoring​ ​ framework​ ​ to​ ​ collect​ ​ this​ ​ information.​ ​ This​ ​ will​ ​ include​ ​ node​ ​ level metrics,​ ​ including​ ​ those​ ​ exposed​ ​ by​ ​ accelerators,​ ​ as​ ​ well​ ​ as​ ​ infrastructure​ ​ metrics​ ​ that are​ ​ available​ ​ from​ ​ PDUs​ ​ and​ ​ PSUs.

**Key​ ​ benefits**

Adding​ ​ energy​ ​ consumption​ ​ metrics​ ​ to​ ​ the​ ​ host​ ​ of​ ​ other​ ​ information​ ​ that can​ ​ be​ ​ collected​ ​ during​ ​ the​ ​ lifetime​ ​ of​ ​ a ​ ​ cluster​ ​ we​ ​ expect​ ​ to​ ​ get​ ​ more​ ​ insight​ ​ in​ ​ the relation​ ​ between​ ​ component​ ​ level​ ​ energy​ ​ consumption​ ​ and​ ​ performance​ ​ and​ ​ utilisation of​ ​ the​ ​ cluster.

![Raspberry Pi clusters for Monitoring Astron]({{site.baseurl}}/assets/images/RaspberryPiCluster.JPG){:width="30% height="auto"}