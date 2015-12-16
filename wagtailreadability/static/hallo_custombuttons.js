(function() {
    (function($) {
        return $.widget('IKS.wagtailReadabilityScore', {
            options: {
                uuid: '',
                editable: null
            },
            populateToolbar: function(toolbar) {
                var button, widget;

                var getEnclosing = function(tag) {
                    var node;

                    node = widget.options.editable.getSelection().commonAncestorContainer;
                    return $(node).parents(tag).get(0);
                };

                button = $('<span></span>');
                button.hallobutton({
                    uuid: this.options.uuid,
                    editable: this.options.editable,
                    label: 'Readability Score',
                    icon: 'icon icon-view',
                    command: null
                });

                toolbar.append(button);
                console.log(this.element.context.innerText);
                var readbilityScore = "/admin/readability/display/";
                button.on('click', function(event) {
                    ModalWorkflow({
            			url: readbilityScore,
            			responses: {}
            			}
            		});
                });
            }
        });
    })(jQuery);
}).call(this);
