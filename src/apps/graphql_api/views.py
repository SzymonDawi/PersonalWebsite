import ariadne_django.views
import rest_framework.authentication
import rest_framework.views

from src.apps.graphql_api import schema


class GraphQLView(ariadne_django.views.GraphQLView, rest_framework.views.APIView):
    schema = schema.schema
    playground_options = {
        "settings": {
            "request.credentails": "same-origin",
        },
        "headers": {},
    }

    # Rest framwork config
    authentication_classes = [
        rest_framework.authentication.SessionAuthentication,
        rest_framework.authentication.TokenAuthentication,
    ]

    def extract_data_from_json_request(self, request):
        # override BaseGraphQLView,
        # rest-framework view handles JSON decode, avoids this error
        # "You cannot acccess body after reading from request's data stream"
        return request.data
